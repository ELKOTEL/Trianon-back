// hotel-cms/schemas/room.js

export default {
    name: "room",
    title: "Room",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Room Name",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "images", // Field for multiple images
        title: "Images",
        type: "array",
        of: [
          {
            type: "image",
            options: {
              hotspot: true, // Enables hotspot cropping
            },
          },
        ],
      },
      {
        name: "persons",
        title: "Persons",
        type: "number",
        description: "The maximum number of persons the room can accommodate",
      },
      {
        name: "bed",
        title: "Bed",
        type: "string",
        description: "The type of bed (e.g., King-size, Queen-size, Twin)",
      },
      {
        name: "surface",
        title: "Surface",
        type: "number",
        description: "The room surface in square meters",
      },
      {
        name: "amenities",
        title: "Amenities",
        type: "array",
        of: [
          {
            type: "string",
          },
        ],
        description: "A list of amenities in the room",
      },
      {
        name: "reservedDates",
        title: "Reserved Dates",
        type: "array",
        of: [
          {
            type: "date",
          },
        ],
        description: "Dates when the room is reserved and unavailable",
      },
      {
        name: "available",
        title: "Available",
        type: "boolean",
        description: "Is the room available? This will be dynamically calculated.",
        readOnly: true, // Making it read-only, as it will be derived from the reservedDates array
      },
    ],
  };
  