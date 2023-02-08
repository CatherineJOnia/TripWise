const { db, User, Trip } = require("./server/db/index");

const seed = async () => {
  try {
    await db.sync({ force: true });
    const jordan = await Trip.create({
      destination: "Jordan",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BDGSOT5mSztO2XSZUQ3HKqCWOxSIhcbd1Q&usqp=CAU",
      description: "Dream desert vacation",
    });
    const greece = await Trip.create({
      destination: "Greece",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXiA_xM8-NLoMTG9cmSqkxhnZdJcYYw52MA&usqp=CAU",
      description: "Mediterranean muse",
    });
    const japan = await Trip.create({
      destination: "Japan",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTq_C0sXCY4EMdoxS34xo0m296MpowO7xYQ&usqp=CAU",
      description: "Culture-packed getaway!",
    });
    const maldives = await Trip.create({
      destination: "Maldives",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJITGtqJPrB6BtDeTGpknlR1Zz1Z-NGIdog&usqp=CAU",
      description: "Tropical paradise",
    });

    const catherine = await User.create({
      username: "CatO",
      password: "123",
      name: "Cat",
      email: "email@gmail.com",
    });
    const tiffany = await User.create({
      username: "tifftiff",
      password: "123",
      name: "Tiffany",
      email: "email@aol.com",
    });

    db.close();
    console.log("seeding successful");
  } catch (err) {
    console.error(err);
    db.close();
  }
};

module.exports = seed;
seed();
