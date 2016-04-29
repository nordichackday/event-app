import test from "tape"
import api  from './api.js'

test("getMockUsers returns", t => {
    t.plan(1)

    var result = api.getMockUsers(200);
    result.then(function(data) {
        t.deepEqual(data, [{humanLabel:{value:"Dave"}, country:"UK"}], "got something")
        t.end()
    })
})

