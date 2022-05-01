import { Injectable } from '@angular/core';
import { BASE_API_URL } from 'src/globals';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static user = new User("", "", 2, true, "2")

  constructor() { }

  async getUser(notifyDisplayError?: (error: string) => void): Promise<User | null> {
    return UserService.user

    // const token = localStorage.getItem('x-auth-token');
    // if (token == null) {
    //   if (notifyDisplayError != undefined) notifyDisplayError('Saved user token not found.');
    //   return null;
    // }

    // const userRes = await fetch(`${BASE_API_URL}/user`, {
    //   headers: {
    //     'x-auth-header': token
    //   }
    // })

    // if (userRes == null || !userRes.ok) {
    //   if (notifyDisplayError != undefined) notifyDisplayError('There was an error fetching user information. Please reload the page and try again.');
    //   return null;
    // }

    // const data = await userRes.json();
    // return (data as User);
  }

  async getUserFile(puzzleId: string, notifyDisplayError?: (error: string) => void): Promise<string | null> {
    return "HERPA MERPA" + puzzleId
    // const token = localStorage.getItem('x-auth-token');
    // if (token == null) {
    //   if (notifyDisplayError != undefined) notifyDisplayError('Saved user token not found.');
    //   return null;
    // }

    // const puzzleStringRes = await fetch(`${BASE_API_URL}/user/${puzzleId}`, {
    //   headers: {
    //     'x-auth-header': token
    //   }
    // })

    // if (puzzleStringRes == null || !puzzleStringRes.ok) {
    //   if (notifyDisplayError != undefined) notifyDisplayError('There was an error fetching your puzzle data. Please reload the page and try again.');
    //   return null;
    // }

    // const data = await puzzleStringRes.json();

    // if (data.error) {
    //   if (notifyDisplayError != undefined) notifyDisplayError(data.error);
    //   return null;
    // }

    // return data.userInput;
  }
}
