import Sequelize, { Model } from 'sequelize';

class Patient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        gender: Sequelize.STRING,
        adress: Sequelize.STRING,
        medic_history: Sequelize.STRING,
        contact: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Patient;
