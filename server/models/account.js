module.exports = function (sequelize, DataTypes) {
  const Account = sequelize.define(
    'Account',
    {
      name: {
        type: DataTypes.STRING,
        field: 'name',
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 250]
        }
      },
      email: {
        type: DataTypes.STRING,
        field: 'email',
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      properties: {
        type: DataTypes.JSON,
        field: 'properties',
        allowNull: false,
        defaultValue: {}
      }
    },
    {
      tableName: 'account',
      timestamps: true,
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_unicode_ci'
    }
  );
  return Account;
};
