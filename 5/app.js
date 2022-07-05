const reverse = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

let str = 'Hello, I am a Front-End to Full-Stack Developer, looking for a chance to work with a team of people who are passionate about the web! Please, contact me!';

console.log(reverse(str));