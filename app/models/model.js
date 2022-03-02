const apps = {
  tutorials: {
    title: String,
    description: String,
    published: Boolean,
  },
  todos: {
    title: String,
    description: String,
    done: Boolean,
  },
};

const appName = "todos";
// console.log(apps[appName]);

module.exports = (mongoose) => {
  // var schema = mongoose.Schema(
  //   {
  //     title: String,
  //     description: String,
  //     published: Boolean,
  //   },
  //   { timestamps: true }
  // );
  var schema = mongoose.Schema(apps[appName], { timestamps: true });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    console.log(object);
    return object;
  });

  const objects = mongoose.model(appName, schema);
  return objects;
};
