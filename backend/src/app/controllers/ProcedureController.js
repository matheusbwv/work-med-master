import * as Yup from 'yup';
import Doctor from '../models/Doctor';
import Surgery from '../models/Surgery';
import Patient from '../models/Patient';
import Room from '../models/Room';
import Procedure from '../models/Procedure';

class ProcedureController {
  async index(req, res) {
    const { page = 1 } = req.body;

    const procedures = await Procedure.findAll({
      order: ['created_at'],
      attributes: ['id', 'expenses', 'status_post_operation'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Doctor,
          attributes: ['name', 'speciality'],
        },
        {
          model: Patient,
          attributes: ['name', 'gender', 'medic_history'],
        },
        {
          model: Surgery,
          attributes: ['name', 'description'],
        },
        {
          model: Room,
          attributes: ['name', 'floor', 'number'],
        },
      ],
    });

    return res.json(procedures);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      patient_id: Yup.number().required(),
      surgery_id: Yup.number().required(),
      doctor_id: Yup.number().required(),
      room_id: Yup.number().required(),
      expenses: Yup.number().required(),
      status_post_operation: Yup.string(),
    });

    if (!(await schema.isValid(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Validações de existencia

    const {
      patient_id,
      surgery_id,
      doctor_id,
      room_id,
      expenses,
      status_post_operation,
    } = await Procedure.create(req.body);

    return res.json({
      patient_id,
      surgery_id,
      doctor_id,
      room_id,
      expenses,
      status_post_operation,
    });
  }

  // Falta o update
  async update(req, res) {
    return res.json();
  }

  async delete(req, res) {
    const procedure = await Procedure.findByPk(req.params.id);

    if (!procedure) {
      return res.status(401).json({ error: 'Procedure not found' });
    }

    procedure.destroy();

    return res.json(procedure);
  }
}

export default new ProcedureController();
