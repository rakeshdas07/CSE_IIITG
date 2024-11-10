const AdminUser = require('../models/Admin');

const createMenus = async (req, res) => {
    const { Breakfast, Lunch, Dinner } = req.body;

    try {
        // Validate input data structure
        if (
            !Breakfast || !Lunch || !Dinner ||
            !Breakfast.Veg || !Breakfast.NonVeg ||
            !Lunch.Veg || !Lunch.NonVeg ||
            !Dinner.Veg || !Dinner.NonVeg
        ) {
            throw Error("Invalid data format");
        }

        // Check if Menus are arrays and Prices are numbers
        const isValidMenuAndPrice = (meal) =>
            Array.isArray(meal.Menus) && typeof meal.Prices === 'number';

        if (
            !isValidMenuAndPrice(Breakfast.Veg) || !isValidMenuAndPrice(Breakfast.NonVeg) ||
            !isValidMenuAndPrice(Lunch.Veg) || !isValidMenuAndPrice(Lunch.NonVeg) ||
            !isValidMenuAndPrice(Dinner.Veg) || !isValidMenuAndPrice(Dinner.NonVeg)
        ) {
            throw Error("Menus must be arrays and Prices must be numbers");
        }

        // Find or create a new admin document
        let adminUser = await AdminUser.findOne();

        if (adminUser) {
            // Update existing document with new daily menus
            adminUser.Breakfast.Veg.Menus = Breakfast.Veg.Menus;
            adminUser.Breakfast.Veg.Prices = Breakfast.Veg.Prices;
            adminUser.Breakfast.NonVeg.Menus = Breakfast.NonVeg.Menus;
            adminUser.Breakfast.NonVeg.Prices = Breakfast.NonVeg.Prices;

            adminUser.Lunch.Veg.Menus = Lunch.Veg.Menus;
            adminUser.Lunch.Veg.Prices = Lunch.Veg.Prices;
            adminUser.Lunch.NonVeg.Menus = Lunch.NonVeg.Menus;
            adminUser.Lunch.NonVeg.Prices = Lunch.NonVeg.Prices;

            adminUser.Dinner.Veg.Menus = Dinner.Veg.Menus;
            adminUser.Dinner.Veg.Prices = Dinner.Veg.Prices;
            adminUser.Dinner.NonVeg.Menus = Dinner.NonVeg.Menus;
            adminUser.Dinner.NonVeg.Prices = Dinner.NonVeg.Prices;

            await adminUser.save();
        } else {
            // Create a new document with daily menus
            adminUser = new AdminUser({
                Breakfast: {
                    Veg: {
                        Menus: Breakfast.Veg.Menus,
                        Prices: Breakfast.Veg.Prices,
                    },
                    NonVeg: {
                        Menus: Breakfast.NonVeg.Menus,
                        Prices: Breakfast.NonVeg.Prices,
                    }
                },
                Lunch: {
                    Veg: {
                        Menus: Lunch.Veg.Menus,
                        Prices: Lunch.Veg.Prices,
                    },
                    NonVeg: {
                        Menus: Lunch.NonVeg.Menus,
                        Prices: Lunch.NonVeg.Prices,
                    }
                },
                Dinner: {
                    Veg: {
                        Menus: Dinner.Veg.Menus,
                        Prices: Dinner.Veg.Prices,
                    },
                    NonVeg: {
                        Menus: Dinner.NonVeg.Menus,
                        Prices: Dinner.NonVeg.Prices,
                    }
                }
            });
            await adminUser.save();
        }

        return res.status(200).json({ message: "Daily menu updated successfully", adminUser });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

const getMenus=async(req, res)=>{
    try {
        const menus = await AdminUser.find().sort({ createdAt: -1 }); // Sort by latest
        res.status(200).json(menus);
      } catch (err) {
        res.status(500).json({error: err.message });
      }
}

module.exports = { createMenus, getMenus };
