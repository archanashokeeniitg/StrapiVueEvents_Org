const axios = require("axios");
module.exports = function(api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/],
        }),
      ]);
    }
  });

  api.loadSource(async (actions) => {
    console.log("wow");
    const { data } = await axios.get("http://localhost:1337/events");
    //console.log("datta", { data });

    const collection = actions.addCollection({
      typeName: "Event",
    });

    for (const event of data) {
      collection.addNode({
        id: event.id,
        title: event.title,
        description: event.description,
        date: event.date,
        duration: event.duration,
        price: event.price,
        category: event.categories[0].id,
      });
    }
  });
};
