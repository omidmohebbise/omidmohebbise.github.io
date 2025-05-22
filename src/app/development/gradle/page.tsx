import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Plugin {
    name: string;
    description: string;
}

const gradlePlugins: Plugin[] = [
    {
        name: 'Spring Boot Plugin',
        description: 'Used for building Spring Boot applications. It simplifies the process of packaging and running Spring applications.'
    },
    {
        name: 'Java Plugin',
        description: 'The basic plugin for compiling Java code, packaging it into JAR files, and managing dependencies.'
    },
    {
        name: 'Kotlin Plugin',
        description: 'For projects that use Kotlin, this plugin enables Kotlin compilation and integrates with the Gradle build system.'
    },
    {
        name: 'Application Plugin',
        description: 'Useful for creating executable applications, it provides functionality to run the application and manage its distribution.'
    },
    {
        name: 'Shadow Plugin',
        description: 'This plugin is used for creating "fat" or "uber" JARs that package all dependencies into a single JAR file.'
    },
    {
        name: 'Checkstyle Plugin',
        description: 'Integrates Checkstyle into the build process to enforce coding standards and style guidelines.'
    },
    {
        name: 'PMD Plugin',
        description: 'Integrates PMD into the build process for static code analysis to identify potential bugs, unused code, and code smells.'
    },
    {
        name: 'FindBugs/SpotBugs Plugin',
        description: 'For static code analysis, helping to identify bugs in Java code by using static analysis tools.'
    },
    {
        name: 'Jacoco Plugin',
        description: 'A code coverage library that helps measure how much of your code is covered by tests.'
    },
    {
        name: 'Maven Publish Plugin',
        description: 'Allows you to publish your artifacts to a Maven repository, whether it’s local or remote.'
    },
    {
        name: 'Docker Plugin',
        description: 'For building and managing Docker images directly from your Gradle build scripts.'
    },
    {
        name: 'Gradle Versions Plugin',
        description: 'Helps you discover dependency updates for your project, making it easier to keep dependencies up to date.'
    },
    {
        name: 'Lombok Plugin',
        description: 'Integrates Project Lombok, which helps reduce boilerplate code in Java by generating getters, setters, and more at compile time.'
    },
    {
        name: 'Google Cloud Plugin',
        description: 'For integrating Google Cloud services into your Java applications, making it easier to deploy and manage applications in the cloud.'
    },
    {
        name: 'Javadoc Plugin',
        description: 'Generates documentation from the Javadoc comments in your code, which is useful for maintaining comprehensive project documentation.'
    }
];

const GradlePluginsList: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Popular Gradle Plugins for Java Developers</h1>
            <div className="list-group">
                {gradlePlugins.map((plugin, index) => (
                    <div className="list-group-item" key={index}>
                        <h5 className="mb-1">{plugin.name}</h5>
                        <p className="mb-1">{plugin.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GradlePluginsList;

