import React from 'react';
import {
  Entypo,
  Foundation,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Fontisto,
  MaterialIcons
} from '@expo/vector-icons';
import { height } from '../../helpers/size';

interface iconProps {
  library: "Entypo" | "Foundation" | "MaterialCommunityIcons"| "FontAwesome"| "FontAwesome5"| "Ionicons"| "Fontisto" | "MaterialIcons";
  name: string;
  color: string;
  size: any;
}

const Icon = ({ library, name, color, size }: iconProps) => {
  // Constants
  const rSize = parseInt(height(size), 10);
  if (library === "Entypo") return (<Entypo name={name} color={color} size={rSize} />);
  if (library === "Foundation") return <Foundation name={name} color={color} size={rSize} />;
  if (library === "MaterialCommunityIcons") return <MaterialCommunityIcons name={name} color={color} size={rSize} />;
  if (library === "FontAwesome") return <FontAwesome name={name} color={color} size={rSize} />;
  if (library === "FontAwesome5") return <FontAwesome5 name={name} color={color} size={rSize} />;
  if (library === "Ionicons") return <Ionicons name={name} color={color} size={rSize} />;
  if (library === "Fontisto") return <Fontisto name={name} color={color} size={rSize} />;
  return <MaterialIcons name={name} color={color} size={rSize} />;
};

export default Icon;