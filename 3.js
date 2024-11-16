// object of hospital
const hospital = {
    doctors: 23,
    patients: 44,
};

let doctors = hospital.doctors;
let patients = hospital.patients;

console.log(doctors);  // 23
console.log(patients);  // 44


const hospital = {
    doctors: 23,
    patients: 44,
};

let { doctors, patients } = hospital;

console.log(doctors);  // 23
console.log(patients);  // 44