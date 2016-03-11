exec{ "apt-update":
	command 	=> "/usr/bin/apt-get update"
}

package { ['curl', 'apache2']:
	ensure => installed,
	require => [Exec['apt-update']],
}