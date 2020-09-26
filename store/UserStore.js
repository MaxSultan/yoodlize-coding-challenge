import { types, getSnapshot } from "mobx-state-tree"
import profile from '../assets/IMG_7767.psd'

// const Listing = types.model({
//     name: types.optional(types.string, ""),
//     image: types.optional(types.string, ""),
//     price: types.optional(types.number, ""),
//     description: types.optional(types.string, ""), 
//     rules: types.optional(types.array, ""),
// })

const User = types.model({
    firstName: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
    location: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    memberSince: types.optional(types.string, ""),
    image: types.optional(types.string, "")
})
.actions(self => ({
    update(userObj){
        self.firstName = userObj.firstName,
        self.lastName = userObj.lastName,
        self.location = userObj.location,
        self.description = userObj.description
    }
}))

const UserStore = types.model({
    user: types.array(User),
})
.create({
    user: [{
        firstName:"Maxwell", 
        lastName: "Sultan", 
        location: "orem, UT", 
        description: 'nice guy. friendly renter', 
        memberSince: `09/22/2020`,
    }]
})

export default UserStore;