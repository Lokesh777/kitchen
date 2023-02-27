const blocksInput = document.getElementById('blocks');
const calculateButton = document.getElementById('calculate');
const waterTank = document.getElementById('waterTank');
const resultDiv = document.getElementById('result');

function calculateWaterUnits(arr) {
    const n = arr.length; //[0, 4, 0, 0, 0, 6, 0, 6, 4, 0];
    const left = new Array(n).fill(0); 
    const right = new Array(n).fill(0);
  
    // Fill left array
    let maxLeft = 0;
    for (let i = 0; i < n; i++) { //[0,0,4,4,4,4,6,6,6,6]
      left[i] = maxLeft;
      maxLeft = Math.max(maxLeft, arr[i]);
      console.log(left[i],maxLeft);
    }
    //arr=[0, 4, 0, 0, 0, 6, 0, 6, 4, 0]
    // Fill right array
    let maxRight = 0;
    for (let i = n - 1; i >= 0; i--) {//[0,0,4,6,6,6,6,6,6,6]
      right[i] = maxRight;
      maxRight = Math.max(maxRight, arr[i]);
    }
    
    // console.log(left,right,"left/right")

    let ans = 0;
    const water = new Array(n).fill(0);
  
    // Calculate water units 
    //   left=[0,0,4,4,4,4,6,6,6,6] , right =[6,6,6,6,6,6,6,4,0,0] ,arr=[0, 4, 0, 0, 0, 6, 0, 6, 4, 0];
    for (let i = 0; i < n; i++) {  //water=[0,0,4,4,4,0,6,0,0,0]
      water[i] = Math.max(Math.min(left[i], right[i]) - arr[i], 0); //0-0=0,0-4=0
      // console.log(water[i]) //-1=0

      ans += water[i];
      // console.log(ans)
    }
  
    return ans;
  }
  
  // Example usage
  const arr = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0];
  const waterUnits = calculateWaterUnits(arr);
  console.log(waterUnits); // Output: 18
  
  

calculateButton.addEventListener('click', () => {
  let blocks = blocksInput.value.split(',').map(x => parseInt(x));
  let units = calculateWaterUnits(blocks);
  resultDiv.innerText = `${units} Units`;

  waterTank.innerHTML = '';
  let blockWidth = 40;
  let blockHeight = 40;
  let waterColor = 'blue';
//   let waterBorder = waterTank.style.border;
//   waterBorder="1px solid gray"

  let n = blocks.length;
  let maxBlockHeight = Math.max(...blocks);
  let waterUnitsPerPixel = units / (maxBlockHeight * blockWidth);
  let waterHeight = waterUnitsPerPixel * blockWidth;

  for (let i = 0; i < n; i++) {
    let block = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    block.setAttribute('x', i * blockWidth);
    block.setAttribute('y', (maxBlockHeight - blocks[i]) * blockHeight);
    block.setAttribute('width', blockWidth);
    block.setAttribute('height', blocks[i] * blockHeight);
    block.setAttribute('fill', 'gray');
    waterTank.appendChild(block);

    if (blocks[i] < maxBlockHeight) {
      let water = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      water.setAttribute('x', i * blockWidth);
      water.setAttribute('y', (maxBlockHeight - waterHeight - blocks[i]) * blockHeight);
      water.setAttribute('width', blockWidth);
      water.setAttribute('height', waterHeight * blockHeight);
      water.setAttribute('fill', waterColor);
    //   water.setAttribute('fill', waterBorder);

      waterTank.appendChild(water);
    }
  }
});

