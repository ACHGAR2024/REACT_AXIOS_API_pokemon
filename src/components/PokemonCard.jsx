// src/components/PokemonCard.jsx
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const PokemonCard = ({ name, image, types, typeColors }) => {
  return (
    <motion.div
      className="hover:animate-bounce hover:cursor-context-menu max-w-xs rounded overflow-hidden shadow-lg bg-white border border-gray-200 transform hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex flex-wrap">
          {types.map((type) => (
            <span
              key={type.type.name}
              className="text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  typeColors: PropTypes.object.isRequired,
};

export default PokemonCard;
