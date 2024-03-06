import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar_inner'>
        <div
          className='chart-bar_fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar_label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;

//style is used for dynamic css, it requires a object that's why 
//we use two curly braces
//if a property has any dashes on its name, you can use "" to write it
//or you can use camel cases in the name like backgroundColor