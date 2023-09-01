import * as Yup from 'yup';
import Patient from '../models/Patient';

class PatientController {
  async index(req, res) {
    const patient = await Patient.findAll({
      attributes: [
        'id',
        'name',
        'cpf',
        'gender',
        'adress',
        'medic_history',
        'contact'],
    });

    return res.json(patient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      cpf: Yup.string(),
      gender: Yup.string(),
      adress: Yup.string(),
      medic_history: Yup.string(),
      contact: Yup.string(),
    });

    if (!(await schema.validate(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const cpfExists = await Patient.findOne({ where: { cpf: req.body.cpf } });
    const contactExistis = await Patient.findOne({ where: { contact: req.body.contact } });

    if (cpfExists || contactExistis) {
      return res.status(400).json({ error: 'CPF or Cellphone already exists' });
    }

    const {
      id,
      name, cpf, gender,
      adress, medic_history,
      contact,
    } = await Patient.create(req.body);

    return res.json({
      id,
      name,
      cpf,
      gender,
      adress,
      medic_history,
      contact,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.number().integer().min(11),
      gender: Yup.string(),
      adress: Yup.string(),
      medic_history: Yup.string(),
      contact: Yup.number().min(10),
    });

    if (!(await schema.isValid(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const patient = await Patient.findByPk(req.params.id);

    patient.update({
      name: req.body.name,
      cpf: req.body.cpf,
      gender: req.body.gender,
      adress: req.body.adress,
      medic_history: req.body.medic_history,
      contact: req.body.contact,
    });

    return res.json(patient);
  }

  async delete(req, res) {
    const patient = await Patient.findByPk(req.params.id);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    patient.destroy();

    return res.json(patient);
  }
}

export default new PatientController();
