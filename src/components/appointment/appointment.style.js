import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const  styles = {
    appointment : {
        flex : 1,
        backgroundColor : COLORS.white,
        padding : 12,
        borderWidth : 1,
        borderColor : COLORS.gray4
    },
    name : {
        fontSize : FONT_SIZE.md,
        color : COLORS.gray1,
        marginBottom : 2,

    },
    specialty : {
        fontSize : FONT_SIZE.sm,
        color : COLORS.gray3,
        marginBottom : 4
    },
    icon : {
        width : 30,
        height : 30,
        marginRight : 5
    },
    bookingDate : {
        fontSize : FONT_SIZE.sm,
        color : COLORS.gray3,
        marginTop : 7
    },
    bookingHour : {
        fontSize : FONT_SIZE.sm,
        color : COLORS.gray3,
        marginTop : 7
    },
    booking : {
        flexDirection : "row"
    },
    containerBooking : {
        flex : 1    // ocupe todo o espaço que tem pra você
    },
    containerButton : {
        marginTop : 12
    },
    container : {
        flexDirection : "row"
    }
}