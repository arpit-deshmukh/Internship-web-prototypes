import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

export const setupGoogle = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: `${process.env.BASE_URL}/api/auth/google/callback`,
            },
            async (accessToken, refreshToken, profile, done) => {
                const email = profile.emails?.[0]?.value;

                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    user = await User.create({
                        name: profile.displayName,
                        googleId: profile.id,
                        email: email,
                        avatar: profile.photos?.[0]?.value,
                    });
                }

                return done(null, user);
            }
        )
    );
};
