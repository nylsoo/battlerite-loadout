import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import errorMessages from '../common/errorMessages';

const Schema = mongoose.Schema({
  name: {
    type: String,
    unique: errorMessages.UNIQUE_ERROR,
    required: errorMessages.REQUIRED_ERROR,
  },
  type: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
  },
  description: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
  },
  image: {
    type: String,
    required: errorMessages.REQUIRED_ERROR,
  },
  champion: {
    type: mongoose.Schema.ObjectId,
    ref: 'Champion',
  },
});

Schema.plugin(uniqueValidator);

export default mongoose.model('Ability', Schema);
