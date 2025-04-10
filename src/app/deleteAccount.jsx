import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Avatar from "@/components/Avatar";
import AntDesign from "@expo/vector-icons/AntDesign";
import DropDown from "@/components/DropDown";
import { router } from "expo-router";
import ConfirmDeletionModal from "@/components/ConfirmDeletionModal";
const options = [
  "Poor service",
  "I've found a better alternative",
  "Privacy concerns",
  "Other",
];

const bulletPoints = [
  {
    note: "You will no longer be able to access the application with this account",
  },
  {
    note: "Your profile and data will be deleted",
  },
  {
    note: "Interaction such as messages and likes will be removed",
  },
];

const deleteAccount = () => {
  //sets the reasonEnum to the ENUM value expected by backend
  const handleDeleteReason = (option) => {
    const index = options.indexOf(option);
    setFormData({ ...formData, reasonEnum: index, reason: option });
  };

  const [formData, setFormData] = useState({
    reason: "Select...",
    moreInfo: "",
    reasonEnum: 0,
  });

  const [confirmDeletion, setConfirmDeletion] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className={`h-full bg-white "}`}>
        <View className="my-2  self-center  relative">
          <Avatar size={100} />
          <View className="bg-red-500 p-2 absolute right-1 bottom-1 w-10 h-10 flex items-center justify-center square rounded-full">
            <AntDesign name="exclamationcircle" size={14} color="white" />
          </View>
        </View>
        <View className="p-4 gap-6">
          <View className="gap-2">
            <Text className="text font-semibold">
              Reason for account deletion:
            </Text>
            <DropDown
              handlePress={handleDeleteReason}
              options={options}
              selectedOption={formData.reason}
            />
          </View>
          <View className="gap-2">
            <Text className="font-semibold">
              Please provide further details:
            </Text>
            <TextInput
              multiline={true}
              numberOfLines={5}
              placeholder="Comments..."
              className="text-black h-36  box-border border-[1.5px] rounded-xl p-4 flex items-center justify-center border-gray-200 focus:border-brand-purple"
            />
          </View>
          <View className="gap-2">
            <Text className="font-semibold text-black">
              We're sorry to see you go. Please note:
            </Text>
            <FlatList
              data={bulletPoints}
              renderItem={({ item }) => (
                <View className="flex gap-2 flex-row">
                  <Text>{"\u2022 "}</Text>
                  <Text>{item.note}</Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View className="h-2"></View>}
            />
          </View>
        </View>
        <View className="p-4 mt-auto">
          <TouchableOpacity
            onPress={() => setConfirmDeletion(true)}
            className="bg-red-500  rounded-full p-4"
          >
            <Text className="text-white font-semibold text-center">
              Delete My Account
            </Text>
          </TouchableOpacity>
        </View>

        <ConfirmDeletionModal
          open={confirmDeletion}
          setOpen={setConfirmDeletion}
        />

        <View
          className={`w-full transition-all duration-500 absolute bg-black/50 h-screen top-0 z-40 rounded-t-xl ${
            confirmDeletion ? "opacity-100" : "opacity-0"
          }`}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default deleteAccount;
