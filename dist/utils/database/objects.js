"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizeToDoObject = void 0;
const organizeToDoObject = (object) => {
    /**
        * Returns an organized version of the object passed on the parameter.
        
        @param object
            object, holds to do's info.

        @returns The organized version of the object passed on the parameter.
    **/
    return {
        sessionId: object.sessionId.trim(),
        title: object.title.trim(),
        deadline: object.deadline.trim(),
        parent: object.parent.trim(),
        isCompleted: object.isCompleted,
        isFavorite: object.isFavorite,
        styles: {
            isBold: object.styles.isBold,
            isItalic: object.styles.isItalic,
            color: object.styles.color
        }
    };
};
exports.organizeToDoObject = organizeToDoObject;
