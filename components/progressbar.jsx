const ProgressBar = ({ step, totalSteps }) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-orange-400 h-2.5 rounded-full"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        ></div>
      </div>
    );
  };
  export default ProgressBar
  // Usage within the MultiStepForm component
  