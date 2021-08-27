import ReactMarkdown from 'react-markdown';
import ArrowRight from '../icons/arrow-right.svg';
import classNames from 'classnames';
import Link from 'next/link';

const additionalFeatures = [
    'Aim Assist',
    'Ultra Wide Monitor Support',
    'Theater/Demo System',
    'Discord Rich Presence',
    'All DLC unlocked',
    'Aim Down Sight Sensitivity',
    'UPNP for custom games',
    '`cg_fovScale` unlocked',
    '`com_maxfps` unlocked',
    '`clanname` dvar',
    '`unlockall`',
    'Rocket jump',
    'Map rotation for ZM servers',
    'IW5: `sl_noTrickshot` dvar',
    'IW5: GSC Support',
    'IW5: AK-74u',
    'IW5: Intervention',
    'IW5: Rust',
    'IW5: Forum Avatars as in-game icon',
    'IW5: Custom card text',
    'IW5: Higher FPS than Steam',
    'T6: `zombies_minplayers` dvar',
    'T6: `sv_allowDof` dvar',
    'T6: `g_randomSeed` dvar',
    'T6: Server side demos',
    'T6: `sv_sayName` dvar',
    'T4: `sp_minplayers`',
    'T4: Unlocked `cg_fov`',
    'T4: Mod downloading',
    'T4: 16x AA',
];

const AdditionalFeatures = () => (
    <div className="bg-gray-900 py-10 lg:py-16">
        <div className="px-4 md:px-6">
            <h1 className="text-xl md:text-4xl font-display font-bold text-center">And much, much more...</h1>

            <p className="font-display text-md md:text-3xl pt-4 leading-relaxed text-center">
                {additionalFeatures.map((feature, i) => (
                    <span
                        key={i}
                        className={classNames(i % 2 === 0 ? 'text-gray-300' : 'text-gray-500', {
                            'hidden md:inline': i > 10 && i < 15,
                            'hidden lg:inline': i >= 15,
                        })}
                    >
                        {i > 0 && ' • '}

                        <ReactMarkdown
                            components={{
                                p: ({ children }) => <>{children}</>,
                                pre: ({ children }) => <pre className="inline">{children}</pre>,
                            }}
                        >
                            {feature}
                        </ReactMarkdown>
                    </span>
                ))}
            </p>

            <p className="text-md md:text-lg pt-4 text-center">
                <Link href="/docs/qol-changes">
                    <a className="text-game-t6 font-semibold hover:underline">
                        Read full feature list <ArrowRight className="h-4 w-4 inline" />
                    </a>
                </Link>
            </p>
        </div>
    </div>
);
export default AdditionalFeatures;
