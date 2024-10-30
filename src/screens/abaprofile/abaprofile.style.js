import {COLORS, FONT_SIZE} from "../../constants/theme";
import icons from "../../constants/icon.js";

export const styles = {
    container : {
        flex : 1,
        backgroundColor : COLORS.white,
        paddingTop : 12
    },
    profile : {
        flex : 1
    },
    item : {
        borderWidth : 1,
        borderColor : COLORS.gray4,
        paddingLeft : 8,
        paddingTop : 15,
        paddingBottom : 15,
    },
    title : {
      fontSize : FONT_SIZE.md,
      color : COLORS.gray3,
      marginBottom : 4
    },
    text : {
        fontSize : FONT_SIZE.md,
        color : COLORS.gray1,
    },
    logout : {
        marginBottom : 10,
        padding : 10
    }
}