let randomEmails = [
    "p1q9a7n2@gmail.com",
    "x4t5d0o1@yahoo.com",
    "b9v2g8m6@hotmail.com",
    "f0s3r1p2@example.com",
    "k6c9q2s7@gmail.com",
    "l8x4z1i5@yahoo.com",
    "e0v5r7j2@hotmail.com",
    "m2t8o4w1@example.com",
    "c6u1b9k7@gmail.com",
    "r3w7y2n0@yahoo.com",
    "h1q9e2l4@hotmail.com",
    "o5a2c8r6@example.com",
    "t9s7y2w6@gmail.com",
    "j4u5g0p1@yahoo.com",
    "g8o4k1d2@hotmail.com",
    "n6e1v9t7@example.com",
    "d2b8f6m4@gmail.com",
    "y5t1s0x7@yahoo.com",
    "i7w3r1t5@hotmail.com",
    "z9k7j2u1@example.com"
  ];

let names = randomEmails.map(email => email.split("@")[0]);
let robots = [];

for (let i=0 ; i < names.length ;i++){
        robots.push({
            id: i,
            name: names[i],
            email: randomEmails[i]
    })
}

export default robots;