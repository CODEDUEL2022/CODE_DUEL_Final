"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const now = new Date();
    return queryInterface.bulkInsert("Combos", [
      {
        id: 1,
        name: "Mark Up",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        name: "Chalk & Cheese",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 3,
        name: "The Script Brothers",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 4,
        name: "Google",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 5,
        name: "Apple",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 6,
        name: "Bird",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 7,
        name: "Rookie",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 8,
        name: "RRR!",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 9,
        name: "PPP!",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 10,
        name: "Animal",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 11,
        name: "Python & Django",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 12,
        name: "Python & Flask",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 13,
        name: "Python & FastAPI",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 14,
        name: "Rust & Actix",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 15,
        name: "JavaScript & Angular",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 16,
        name: "TypeScript & Angular",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 17,
        name: "C# & ASP.NET Core",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 18,
        name: "CSS & Bootstrap",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 19,
        name: "PHP & CakePHP",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 20,
        name: "Go & Echo",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 21,
        name: "JavaScript & Electron",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 22,
        name: "TypeScript & Electron",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 23,
        name: "Node.js & Express",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 24,
        name: "Flutter & Dart",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 25,
        name: "React & Gatsby",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 26,
        name: "Kotlin & Ktor",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 27,
        name: "PHP & Laravel",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 28,
        name: "Ruby on Rails",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 29,
        name: "React & Next.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 30,
        name: "CSS & Sass",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 31,
        name: "Java & Spring",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 32,
        name: "JavaScript & Svelte",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 33,
        name: "TypeScript & Svelte",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 34,
        name: "JavaScript & JQuery",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 35,
        name: "CSS & MaterialUI",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 36,
        name: "Vue & Nuxt.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 37,
        name: "JavaScript & Node.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 38,
        name: "TypeScript & Node.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 39,
        name: "Swift & SwiftUI",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 40,
        name: "CSS & Tailwind CSS",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 41,
        name: "Rust & tauri",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 42,
        name: "JavaScript & Three.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 43,
        name: "TypeScript & Three.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 44,
        name: "JavaScript & Vue.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 45,
        name: "TypeScript & Vue.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 46,
        name: "JavaScript & React.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 47,
        name: "TypeScript & React.js",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 48,
        name: "Vue & Vuetify",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
