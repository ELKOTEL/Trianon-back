export default {
    name: "extras",
    title: "Extras",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
      },
    ],
  };
  