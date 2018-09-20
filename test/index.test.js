const functions = require('../src/index.js');

test('ensure pure multiply', function(){
  const input = [1,2,3,4]
  const expectedInput = [1,2,3,4]
  const expectedOutput = [2,4,6,8]
  const output = functions.multiply(input, 2)
  expect(input).toEqual(expectedInput)
  expect(output).toEqual(expectedOutput)
});

test('ensure pure absolute', function(){
    const input = [-1, -10, 0, 10, 15];
    const expectedInput = [-1, -10, 0, 10, 15];
    const expectedOutput = [1, 10, 0, 10, 15];
    const output = functions.absolute(input);
    expect(input).toEqual(expectedInput);
    expect(output).toEqual(expectedOutput);
});    

test('ensure pure concatNames function', function(){
  const input = [{firstName: 'Alan', lastName:'Sugar'}, {firstName: "John", lastName: "Smith"}]
  const expectedInput = [{firstName: 'Alan', lastName:'Sugar'}, {firstName: "John", lastName: "Smith"}]
  const expectedOutput = ['Alan Sugar', 'John Smith']
  const output = functions.concatNames(input)
  expect(input).toEqual(expectedInput)
  expect(output).toEqual(expectedOutput)
})

test('ensure pure numbers to strings', function(){
  const input = [1,2,3,4,5,6];
  const expectedInput = [1,2,3,4,5,6];
  const expectedOutput = ["1","2","3","4","5","6"];
  const output = functions.numbersToStrings(input);
  expect(input).toEqual(expectedInput);
  expect(output).toEqual(expectedOutput);
});

test('ensure pure sortByLength function', function() {
  const input = ['ConstructorLabs', 'hi', 'Baker Row', 'Mariusz'];
  const expectedInput = ['ConstructorLabs', 'hi', 'Baker Row', 'Mariusz'];
  const expectedOutput = ['ConstructorLabs', 'Baker Row', 'Mariusz', 'hi'];
  const output = functions.sortByLength(input);
  expect(input).toEqual(expectedInput);
  expect(output).toEqual(expectedOutput);
})

test("ensure lastTwo function is pure", function(){
  const input = [1,2,9,3,0,5,12,1];
  const expectedInput = [1,2,9,3,0,5,12,1];
  const expectedOutput = [12,1];
  const output = functions.lastTwo(input);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});

test("increment year of car by one - input", function() {
  const input = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1992
    },
    {
      make: "Ford",
      model: "Mondeo",
      year: 1996
    }
  ];
  const expectedInput = [
  {
    make: "Vauxhall",
    model: "Astra",
    year: 1992
  },
  {
    make: "Ford",
    model: "Mondeo",
    year: 1996
  }
];

const expectedOutput = [
  {
      make: "Vauxhall",
      model: "Astra",
      year: 1993
    },
    {
      make: "Ford",
      model: "Mondeo",
      year: 1997
    }
  ];

  const output = functions.incrementYear(input)
  expect(input).toEqual(expectedInput)
});

test("increment year of car by one - output", function() {
  const input = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1992
    },
    {
      make: "Ford",
      model: "Mondeo",
      year: 1996
    }
  ];
  const expectedInput = [
  {
    make: "Vauxhall",
    model: "Astra",
    year: 1992
  },
  {
    make: "Ford",
    model: "Mondeo",
    year: 1996
  }
];

const expectedOutput = [
  {
      make: "Vauxhall",
      model: "Astra",
      year: 1993
    },
    {
      make: "Ford",
      model: "Mondeo",
      year: 1997
    }
  ];

  const output = functions.incrementYear(input)
  expect(output).toEqual(expectedOutput)
});

test('ensure that totalSales is pure', function() {
  const input = {
    Roland: [22, 11, 4, 1],
    Dan: [33, 6, 11],
    Mariusz: [7, 16, 11]
  }

  const expectedInput = {
    Roland: [22, 11, 4, 1],
    Dan: [33, 6, 11],
    Mariusz: [7, 16, 11]
  }

  const expectedOutput = {
    Roland: 38,
    Dan: 50,
    Mariusz: 34
  }

  const output = functions.totalSales(input);
  expect(input).toEqual(expectedInput);
  expect(output).toEqual(expectedOutput);
});