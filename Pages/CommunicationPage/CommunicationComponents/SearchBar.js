import React from "react";
import { View } from "react-native";
import { Input } from "@ui-kitten/components";

const SearchBar = ({setSearch}) => {

    return(
        <View>
            <Input 
                onChangeText={(content) => setSearch(content)} 
                placeholder={"Search By Name"}
            />
        </View>
    )
}
export default SearchBar