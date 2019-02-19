module.exports = (sequelize, DataTypes) => {
  const InterestedEvent = sequelize.define('InterestedEvent', {
    rsvp: { type: DataTypes.BOOLEAN, default: false },
  }, {
    instanceMethods: {
      toggleRsvp() {
        this.update({ rsvp: !this.get('rsvp') });
      },
    },
  });
  return InterestedEvent;
};