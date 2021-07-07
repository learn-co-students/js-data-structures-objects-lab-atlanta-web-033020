// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    let returnDriver = {...driver}
    returnDriver[key] = value
    return returnDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    let returnDriver = {...driver}
    delete returnDriver[key]
    return returnDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
