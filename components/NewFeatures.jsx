import styles from '../styles';


const NewFeatures = ({ imgUrl, title, subtitle}) => (
  <div className='flex-1 flex flex-col sm:max-w-64 min-w-52'>
    <div className={`${styles.flexCenter} w-16 h-16 rounded-3xl bg-[#323f5d]`}>
      <img src={imgUrl} alt='icon' className='w-1/2 h-1/2 object-contain' />
    </div>
      <h1 className='mt-6 font-bold text-base leading-7 text-white'>Title {title}</h1>
      <p className='flex-1 leading-8 mt-4 font-normal text-lg text-[#b0b0b0] '>{subtitle}</p>
  </div>
);

export default NewFeatures;
