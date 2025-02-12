export default function SecurityPage() {
    return (
        <div className="container py-3">
            <div className="card">
                <div className="card-header">
                    <h4>Definition</h4>
                </div>
                <div className="card-body">
                    <b>STRIDE</b> is a threat modeling framework developed by <b>Microsoft</b> <u>to help identify potential security threats in a system</u>. It <b>categorizes threats</b> into <b>six</b> types, each corresponding to a different aspect of security:

                    <ol className="mt-2">
                        <li className="my-2"><strong> 1. Spoofing (S):</strong>Pretending to be someone else to gain unauthorized access (e.g., using stolen credentials)</li>
                        <li className="my-2"><strong> 2. Tampering (T):</strong>Modifying data or code maliciously (e.g., altering database records)</li>
                        <li className="my-2"><strong> 3. Repudiation (R):</strong> Denying an action that cannot be traced (e.g., a user claiming they didn’t perform a transaction)</li>
                        <li className="my-2"><strong> 4. Information Disclosure (I):</strong> Leaking sensitive data (e.g., unencrypted passwords being exposed)</li>
                        <li className="my-2"><strong> 5. Denial of Service (D):</strong> Overloading a system to make it unavailable (e.g., DDoS attacks)</li>
                        <li className="my-2"><strong> 6. Elevation of Privilege (E):</strong> Gaining higher access than authorized (e.g., exploiting vulnerabilities to gain admin privileges)</li>

                    </ol>
                </div>
            </div>

            <div className="card my-2">
                <div className="card-header">
                    <h4>STRIDE Threat Model Analysis</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-bordered table-striped">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Threat Type</th>
                                        <th>Description</th>
                                        <th>Example</th>
                                        <th>Mitigation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Spoofing</strong></td>
                                        <td>Impersonating a user or system</td>
                                        <td>Using stolen credentials to log in</td>
                                        <td>Implement strong authentication (MFA, OAuth, etc.)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Tampering</strong></td>
                                        <td>Modifying data or code maliciously</td>
                                        <td>Altering database records without authorization</td>
                                        <td>Use integrity checks, digital signatures</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Repudiation</strong></td>
                                        <td>Denying an action that lacks proof</td>
                                        <td>A user denies making a financial transaction</td>
                                        <td>Enable logging, use non-repudiation mechanisms</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Information Disclosure</strong></td>
                                        <td>Leaking sensitive data</td>
                                        <td>Exposing user passwords in logs</td>
                                        <td>Use encryption, access control, secure logging</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Denial of Service</strong></td>
                                        <td>Overloading a system to make it unavailable</td>
                                        <td>DDoS attack on a website</td>
                                        <td>Implement rate limiting, firewalls, CAPTCHAs</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Elevation of Privilege</strong></td>
                                        <td>Gaining higher access than authorized</td>
                                        <td>A user exploits a vulnerability to become an admin</td>
                                        <td>Apply least privilege, secure coding practices</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}