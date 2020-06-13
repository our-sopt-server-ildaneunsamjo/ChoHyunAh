// 자신의 조원들을 정보로 하는 JSON 배열을 만들어 출력

var members = [
    {name: '조현아', age: 23, part: 'server'},
    {name: '이현주', age: 24, part: 'server'},
    {name: '김대현', age: 25, part: 'server'},
    {name: '이준호', age: 25, part: 'server'},
    {name: '김가인', age: 25, part: 'server'}
];

//JSON 배열 출력level2
//console.log(members);

//level3
members.forEach(members => console.log(members.name+'는(은) 나이가 '+members.age+'살이고, '+members.part+'파트 입니다!'));