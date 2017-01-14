/*
function getTempCallback(location, callback) {
    callback(undefined, '78');
    callback('City not found');
}

getTempCallback('San Diego', function(error, temp) {
    if (error) {
        console.log('error', error);
    } else {
        console.log('success', temp);
    }
});

function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('San Diego').then(function(temp) {
    console.log('promise success', temp);
}, function(error) {
    console.log('promise error', error);
});*/
// Challenge area
function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number')
            resolve(a + b);
        else
            reject('These aren\'t numbers homie');
    });
};

addPromise(1).then(function(sum) {
    console.log('promise success', sum);
}, function(err) {
    console.log('promise error', err);
});