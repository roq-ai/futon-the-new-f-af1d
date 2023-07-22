import * as yup from 'yup';

export const footballMatchValidationSchema = yup.object().shape({
  update: yup.string().required(),
  score: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
