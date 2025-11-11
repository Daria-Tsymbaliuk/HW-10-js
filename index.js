 const box = document.getElementById('box');
    let step = 0;

    const states = [
      { color: 'red',    x: 0,   y: 0,   shadow: 'rgba(149,157,165,0.2) 0px 8px 28px' },
      { color: 'blue',   x: 0,   y: 300, shadow: 'rgba(38,57,77,0.5) 0px 20px 32px -10px' },
      { color: 'green',  x: 300, y: 300, shadow: 'rgba(0,0,0,0.26) 0px 0px 0px 1px' },
      { color: 'yellow', x: 300, y: 0,   shadow: 'rgba(0,0,0,0.3) 0px 19px 33px, rgba(0,0,0,0.22) 0px 15px 12px' }
    ];

    setInterval(() => {
      const s = states[step];
      box.style.backgroundColor = s.color;
      box.style.transform = `translate(${s.x}px, ${s.y}px)`;
      box.style.boxShadow = s.shadow;

      step = (step + 1) % states.length;
    }, 1000);


    const alerter = (time) => {
  alert(`Повідомлення через ${time} мс !!! ;3`);
};

let count = 0;

const intervalID = setInterval(() => {
  count++;
   alerter(count * 1000);

  if (count === 5) {
    clearInterval(intervalID);
    alert("Інтервал зупинено після 5 повідомлень !! ; <");
  }
}, 1000);


