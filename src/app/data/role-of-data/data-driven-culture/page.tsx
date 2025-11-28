export default function DataDrivenCulturePage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Data-Driven Culture</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>What "Data-Driven" Means</h3>
                    <p>A data-driven culture prioritizes evidence and metrics over opinion and intuition when making decisions. Key characteristics include:</p>
                    <ul>
                        <li><strong>Evidence-Based Decisions:</strong> All major decisions are supported by data and analysis</li>
                        <li><strong>Transparency:</strong> Data and insights are shared across departments openly</li>
                        <li><strong>Accountability:</strong> Performance is measured objectively against data metrics</li>
                        <li><strong>Continuous Improvement:</strong> Data insights drive iterative improvements</li>
                        <li><strong>Experimentation:</strong> A/B testing and controlled experiments validate hypotheses</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Building Data Culture</h3>
                    <ul>
                        <li><strong>Leadership Buy-In:</strong> Executive sponsorship signals importance</li>
                        <li><strong>Data Literacy:</strong> Invest in training employees to understand data</li>
                        <li><strong>Accessibility:</strong> Make data tools easy to use for non-technical users</li>
                        <li><strong>Incentives:</strong> Reward data-driven decision-making and insights</li>
                        <li><strong>Failure Tolerance:</strong> Allow experimentation with low-risk failures</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Roles & Responsibilities</h3>

                    <h4><strong>Business Users</strong></h4>
                    <ul>
                        <li>Define data needs and analytical questions</li>
                        <li>Interpret insights and act on recommendations</li>
                        <li>Provide domain expertise to validate findings</li>
                        <li>Champion data usage in their departments</li>
                    </ul>

                    <h4><strong>Data Teams (Analytics, Scientists)</strong></h4>
                    <ul>
                        <li>Design and implement analytical solutions</li>
                        <li>Ensure data quality and accuracy</li>
                        <li>Communicate findings to non-technical stakeholders</li>
                        <li>Stay current with analytical techniques</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Organizational Roles Continued</h3>

                    <h4><strong>IT & Engineering</strong></h4>
                    <ul>
                        <li>Build and maintain data infrastructure</li>
                        <li>Ensure data security and compliance</li>
                        <li>Integrate systems and enable data flow</li>
                        <li>Provide technical support for data tools</li>
                    </ul>

                    <h4><strong>Leadership</strong></h4>
                    <ul>
                        <li>Set data strategy and goals</li>
                        <li>Allocate budget and resources</li>
                        <li>Model data-driven thinking in decisions</li>
                        <li>Foster psychological safety for experimentation</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Challenges in Building Data Culture</h3>
                    <ul>
                        <li><strong>Resistance to Change:</strong> Not all employees embrace new ways of working</li>
                        <li><strong>Data Silos:</strong> Departments hoard data instead of sharing</li>
                        <li><strong>Tool Complexity:</strong> Complex tools can overwhelm non-technical users</li>
                        <li><strong>Time to Insight:</strong> Slow analytics slow down decision-making</li>
                        <li><strong>Skill Gaps:</strong> Limited data literacy and technical skills</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
