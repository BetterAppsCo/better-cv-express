
module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Account', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      }
    });
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Account');
  },
};
