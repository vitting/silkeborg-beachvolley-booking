import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private db: AngularFirestore) { }

  get timestamp(): firebase.firestore.Timestamp {
    return firebase.firestore.Timestamp.now();
  }

  timestampFromDate(date: Date): firebase.firestore.Timestamp {
    return firebase.firestore.Timestamp.fromDate(date);
  }

  get newId(): string {
    return this.db.createId();
  }

  vibrate(time: number | number[] = 200): void {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(time);
    }
  }

  get currentYear(): number {
    return new Date(Date.now()).getFullYear();
  }

  get browserLanguage(): string {
    let languageCode = "en";

    if (window.navigator.language) {
      if (window.navigator.language.includes("da")) {
        languageCode = "da";
      }
    } else if (navigator.language) {
      if (navigator.language.includes("da")) {
        languageCode = "da";
      }
      return navigator.language;
    }

    return languageCode;
  }

  get angularEditorStandardConfig(): AngularEditorConfig {
    return {
      editable: true,
      showToolbar: true,
      toolbarPosition: "bottom",
      height: "auto",
      minHeight: "200px",
      maxHeight: "auto",
      width: "100%",
      minWidth: "100%",
      sanitize: true,
      outline: true,
      defaultFontName: "Arial",
      fonts: [{ class: "arial", name: "Arial" }],
      toolbarHiddenButtons: [
        ["strikeThrough", "subscript", "superscript"],
        [
          "fontSize",
          "textColor",
          "backgroundColor",
          "customClasses",
          "insertVideo",
          "toggleEditorMode",
        ],
      ],
    };
  }

  get dayNames(): string[] {
    const dayNames: string[] = ["man", "tirs", "ons", "tors", "fre", "lør", "søn"];
    return dayNames;
  }
}
