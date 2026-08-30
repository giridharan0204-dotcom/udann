import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, set, get, update } from 'firebase/database';
import { db, rtdb } from './firebase';
import { UserProfile, UserRoadmap, JourneyState } from '../types';

export class DbService {
  /**
   * Save user diagnostic profile to Firebase (Firestore & RTDB)
   */
  public static async saveUserProfile(userId: string, profile: UserProfile): Promise<void> {
    if (!userId) return;

    try {
      // 1. Save to Firestore
      const userDocRef = doc(db, 'users', userId);
      await setDoc(userDocRef, {
        profile,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (firestoreErr) {
      console.warn('Firestore user profile save failed, trying Realtime Database:', firestoreErr);
      try {
        // Fallback / Dual-write to Realtime Database
        const userRtdbRef = ref(rtdb, `users/${userId}/profile`);
        await set(userRtdbRef, {
          ...profile,
          updatedAt: new Date().toISOString()
        });
      } catch (rtdbErr) {
        console.warn('Realtime Database profile save error:', rtdbErr);
      }
    }
  }

  /**
   * Fetch user diagnostic profile from Firebase
   */
  public static async getUserProfile(userId: string): Promise<UserProfile | null> {
    if (!userId) return null;

    try {
      // 1. Try Firestore first
      const userDocRef = doc(db, 'users', userId);
      const snapshot = await getDoc(userDocRef);
      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data?.profile) {
          return data.profile as UserProfile;
        }
      }
    } catch (firestoreErr) {
      console.warn('Firestore profile fetch failed, trying Realtime Database:', firestoreErr);
    }

    try {
      // 2. Try Realtime Database
      const userRtdbRef = ref(rtdb, `users/${userId}/profile`);
      const snapshot = await get(userRtdbRef);
      if (snapshot.exists()) {
        return snapshot.val() as UserProfile;
      }
    } catch (rtdbErr) {
      console.warn('Realtime DB profile fetch error:', rtdbErr);
    }

    return null;
  }

  /**
   * Save generated roadmap to Firebase
   */
  public static async saveUserRoadmap(userId: string, roadmap: UserRoadmap): Promise<void> {
    if (!userId) return;

    try {
      const roadmapDocRef = doc(db, 'roadmaps', userId);
      await setDoc(roadmapDocRef, {
        ...roadmap,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (firestoreErr) {
      console.warn('Firestore roadmap save error, trying RTDB:', firestoreErr);
      try {
        const rtdbRef = ref(rtdb, `roadmaps/${userId}`);
        await set(rtdbRef, {
          ...roadmap,
          updatedAt: new Date().toISOString()
        });
      } catch (rtdbErr) {
        console.warn('RTDB roadmap save error:', rtdbErr);
      }
    }
  }

  /**
   * Fetch generated roadmap from Firebase
   */
  public static async getUserRoadmap(userId: string): Promise<UserRoadmap | null> {
    if (!userId) return null;

    try {
      const docRef = doc(db, 'roadmaps', userId);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        return snapshot.data() as UserRoadmap;
      }
    } catch (err) {
      console.warn('Firestore roadmap fetch failed, trying RTDB:', err);
    }

    try {
      const rtdbRef = ref(rtdb, `roadmaps/${userId}`);
      const snapshot = await get(rtdbRef);
      if (snapshot.exists()) {
        return snapshot.val() as UserRoadmap;
      }
    } catch (err) {
      console.warn('RTDB roadmap fetch failed:', err);
    }

    return null;
  }

  /**
   * Save user journey progress (tasks, bookmarks, applications, notes)
   */
  public static async saveJourneyState(userId: string, journeyState: JourneyState): Promise<void> {
    if (!userId) return;

    try {
      const journeyDocRef = doc(db, 'journeys', userId);
      await setDoc(journeyDocRef, {
        ...journeyState,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (firestoreErr) {
      console.warn('Firestore journey save failed, trying RTDB:', firestoreErr);
      try {
        const rtdbRef = ref(rtdb, `journeys/${userId}`);
        await set(rtdbRef, {
          ...journeyState,
          updatedAt: new Date().toISOString()
        });
      } catch (rtdbErr) {
        console.warn('RTDB journey save failed:', rtdbErr);
      }
    }
  }

  /**
   * Fetch user journey progress from Firebase
   */
  public static async getJourneyState(userId: string): Promise<JourneyState | null> {
    if (!userId) return null;

    try {
      const docRef = doc(db, 'journeys', userId);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        return snapshot.data() as JourneyState;
      }
    } catch (err) {
      console.warn('Firestore journey fetch failed, trying RTDB:', err);
    }

    try {
      const rtdbRef = ref(rtdb, `journeys/${userId}`);
      const snapshot = await get(rtdbRef);
      if (snapshot.exists()) {
        return snapshot.val() as JourneyState;
      }
    } catch (err) {
      console.warn('RTDB journey fetch failed:', err);
    }

    return null;
  }
}
