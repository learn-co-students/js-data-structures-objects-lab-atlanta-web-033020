// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
    return Object.assign( {}, object, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign( {}, driver)
    delete newDriver[key]
    return newDriver
}