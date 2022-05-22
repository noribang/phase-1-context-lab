/* Your Code Here */
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


/* Creates object whose fields are populated from array values. */
function createEmployeeRecord(arr) {
    let createRec = {firstName: arr[0],
                familyName: arr[1],
                title: arr[2],
                payPerHour: arr[3],
                timeInEvents: [],
                timeOutEvents: []
                }
    return createRec
        
}
/* Creates an array of objects from arrays in array. */
function createEmployeeRecords(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        // newArr.push({})
        // console.log(arr[i])
        /* Pass each array in array to createEmployeeRecord.
           createEmployeeRecord will create an object with fields populated with array's values. */
        let employee = createEmployeeRecord(arr[i])
        // console.log(employee)
        /* Push employee object into newArr array. */
        // newArr[i] = employee
        newArr.push(employee)
        console.log(newArr)
    }
    return newArr
}
/* Updates timeInEvents field of employee record object. 
   Returns updated employee record object. */
//    function createTimeInEvent(empRecord, timeStamp) {
   function createTimeInEvent(timeStamp) {
    /* Extract date of time stamp. */
    const dateTimeIn = timeStamp.slice(0,10)
    /* Extract hour of time stamp. */
    const hourTimeIn = timeStamp.slice(11)
    const hourTimeInInt = parseInt(hourTimeIn, 10)
    /* Object fields will have type, date and hour. */
    const updateTimeInEvents = {type: "TimeIn",
                                date: dateTimeIn,
                                hour: hourTimeInInt}
    // If timeInEvents[].length === 0, add updateTimeInEvents
    // into array's 0th position timeInEvents[0].
    // If timeInEvent[].length > 0 append updateTimeInEvents
    // into next position (i.e. timeInEvent[timeInEvent[].length]).

    // empRecord.timeInEvents[0] =  updateTimeInEvents
    // empRecord.timeInEvents.push(updateTimeInEvents)
    this.timeInEvents.push(updateTimeInEvents)
    // return empRecord

    /* Returns bpRecord object from indexTest.js 
       with updateTimeInEvents object added to timeInEvents property. */    
    return this
}
/* Updates timeOutEvents field of employee record object. 
   Returns updated employee record object. */
//    function createTimeOutEvent(empRecord, timeStamp) {
   function createTimeOutEvent(timeStamp) {
    /* Extract date of time stamp. */
    const dateTimeOut = timeStamp.slice(0,10)
    /* Extract hour of time stamp. */
    const hourTimeOut = timeStamp.slice(11)
    const hourTimeOutInt = parseInt(hourTimeOut, 10)
    /* Object fields will have type, date and hour. */
    const updateTimeOutEvents = {type: "TimeOut",
                                date: dateTimeOut,
                                hour: hourTimeOutInt}
    // If timeOutEvents[].length === 0, add updateTimeOutEvents
    // into array's 0th position timeOutEvents[0].
    // If timeOutEvent[].length > 0 append updateTimeOutEvents
    // into next position (i.e. timeOutEvent[timeOutEvent[].length]).                            
    
    // empRecord.timeOutEvents[0] =  updateTimeOutEvents
    // empRecord.timeOutEvents.push(updateTimeOutEvents)
    this.timeOutEvents.push(updateTimeOutEvents)
    
    // return empRecord

    /* Returns bpRecord object from indexTest.js 
       with updateTimeOutEvents object added to timeOutEvents property. */
    return this
}
/* Calculates hours worked given employee record object and matching date. */
// function hoursWorkedOnDate(empRecord, date) {
function hoursWorkedOnDate(date) {
    // Loop through empRecord.timeInEvents array
    // to check which object's date matches date passed in.
    let hourIn
    let hourOut
    for (let i = 0; i < this.timeInEvents.length; i++) {
    // for (let i = 0; i < empRecord.timeInEvents.length; i++) {
        // Verify if employee record time in and time out dates are equal 
        // to time that is passed in as argument.
        const timeInDate = this.timeInEvents[i].date
        // const timeInDate = empRecord.timeInEvents[i].date
        if (timeInDate === date) {
            hourIn = this.timeInEvents[i].hour
            // hourIn = empRecord.timeInEvents[i].hour
        }
    } 
    // for (let i = 0; i < empRecord.timeOutEvents.length; i++) {
    for (let i = 0; i < this.timeOutEvents.length; i++) {
        // Verify if employee record time in and time out dates are equal 
        // to time that is passed in as argument.
        const timeOutDate = this.timeOutEvents[i].date
        // const timeOutDate = empRecord.timeOutEvents[i].date
        if (timeOutDate === date) {
            hourOut = this.timeOutEvents[i].hour
            // hourOut = empRecord.timeOutEvents[i].hour
        }
    } 
    // If true then calculate hours worked by 
    // subtracting hour out from hour in.
    const hoursWorked = (hourOut - hourIn) / 100
    // Returns hours worked.
    return hoursWorked
}
/* Calculates wages for Single Date by mulitplying hours worked by employee's 
   rate per hour.
   Given employee record with a date-matched timeInEvent and timeOutEvent. */
//    function wagesEarnedOnDate(empRecord, date) {
   function wagesEarnedOnDate(date) {
    // Get int hours worked.
    const getHoursWorked = hoursWorkedOnDate.call(this, date)
    // const getHoursWorked = hoursWorkedOnDate(empRecord, date)
    console.log("hours: ", typeof getHoursWorked)
    // Get employee's int rate per hour.
    const getRatePerHour = this.payPerHour
    // const getRatePerHour = empRecord.payPerHour
    console.log("rate: ", getRatePerHour)
    // Calculate wages by multiplying hours worked by rate per hour.
    const calWagesEarned = getHoursWorked * getRatePerHour
    console.log("wages: ", calWagesEarned)
    // // Return wages earned on date.
    return calWagesEarned
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

/* Finds employee by firstName. */
function findEmployeeByFirstName(srcArray, firstName) {
    // Loop through array of arrays.
    for (const employeeObj of srcArray) {
        console.log(employeeObj)
        if (employeeObj.firstName === firstName) {
            return employeeObj
        }
    }
    return undefined
}


/* Sum of pay for all employees for all dates. */
// Test with: 
// const emps = [["Rafiki", "", "Aide", 10], ["Simba", "", "King", 100]]
// function calculatePayroll(employees) {
//     // Create employee record object for mulitiple employees 
//     // from array of arrays.
//     // Returns array of objects.
//     // const allEmpRecords = createEmployeeRecords(employees)

//     // Total wages earned for all employees.
//     let totalWagesAllEmp = 0

//     // Loop through array of objects and pass
//     // each to allWagesFor.
//     // for (const employee of allEmpRecords) {
//     for (const employee of employees) {
//         // Takes single employee record object.
//         // Returns int totalWages for single employee.
//         // totalWagesAllEmp += allWagesFor(employee)
//         totalWagesAllEmp += allWagesFor.call(employee)
//         console.log(totalWagesAllEmp)
//     }
//     return totalWagesAllEmp
// }

function calculatePayroll(records) {
    return records.reduce((acc, record) => {
        return allWagesFor.call(record) + acc
    }, 0)
}