import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";

import { useRecoilState } from "recoil";
import { accidentDataState } from "../../../Recoil/atoms";

import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import Banner from "../../../Global/Banner";

let maxWidth = Dimensions.get('window').width

const AccidentSummation = () => {
/////////////////////////////////////////
///                                   ///
///       Preliminary Settings        ///
///                                   ///
/////////////////////////////////////////


}