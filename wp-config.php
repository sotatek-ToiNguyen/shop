<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shop' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'x]lZZ-7r6H,fHTEKWHYUn!8&/!?;7,r}pZc Fo4dHQy^3`bOifqU]2;X}[2xfpt?' );
define( 'SECURE_AUTH_KEY',  'y)6$Lin-N=ycXYu&uU8;`xec+w^%nFn69jwVr=?%j2OJ[|DDagdlD.N/A0UT$jz+' );
define( 'LOGGED_IN_KEY',    'qBGL5R7x4*|xbOOp.jUqM>?j4MgFPb]oI?B3[}K64^WfzTyVZ;mUh|?FcDJ;}H/Q' );
define( 'NONCE_KEY',        '9~<yn;`)l}N`~|`XI9z*iV5G>~}|8>_q5{ #N?7E.D/HEPDrS%6]XQ^0&&5Z,|f&' );
define( 'AUTH_SALT',        'f@]CZ86@LHIVPM(S38LR#%Yv~Y{?)0}G&8u~@V]FGY}marff1b8lhlDPji&n4hi:' );
define( 'SECURE_AUTH_SALT', '*<^%4zektUYXe?co1V2k+fO;I@)q9HG/_Pyh%3F?MJ&9 O<vxFD,x<I*=D>Sr8W2' );
define( 'LOGGED_IN_SALT',   '5U9&P1kn=1BC&XWgf&279(4kG%x.}W(rTuyno[%BjX3)x4c,guHGL[}qlU#tB+]W' );
define( 'NONCE_SALT',       '4%5}A}2b#M(dxRa@8!fw1yLYk<NiIY,u/ + %s@_RQA0A{! KfLV>t|n} 25%hI_' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
