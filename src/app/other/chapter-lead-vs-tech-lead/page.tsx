import React from 'react';

const RoleComparison: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tech Lead vs Chapter Lead</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Aspect</th>
              <th>Tech Lead</th>
              <th>Chapter Lead</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary Focus</td>
              <td>Technology & delivery within a single squad</td>
              <td>People, skills & standards across multiple squads</td>
            </tr>
            <tr>
              <td>Reports To</td>
              <td>Engineering Manager or Squad Lead</td>
              <td>Engineering Manager or Tribe Lead</td>
            </tr>
            <tr>
              <td>Direct Reports</td>
              <td>Usually none (unless also EM)</td>
              <td>Yes — engineers from the chapter</td>
            </tr>
            <tr>
              <td>Core Responsibilities</td>
              <td>
                Technical direction, mentoring, architecture within a squad
              </td>
              <td>
                Career development, consistency, hiring, knowledge sharing
              </td>
            </tr>
            <tr>
              <td>Scope</td>
              <td>One team (squad)</td>
              <td>Multiple teams (but one craft — e.g., Frontend Chapter)</td>
            </tr>
            <tr>
              <td>Performance Reviews</td>
              <td>Provides input</td>
              <td>Owns & conducts them</td>
            </tr>
            <tr>
              <td>Delivery Accountability</td>
              <td>Yes — owns delivery with the squad</td>
              <td>No — supports teams, but doesn’t own delivery</td>
            </tr>
            <tr>
              <td>Cross-Team Work</td>
              <td>May collaborate with other squads</td>
              <td>Coordinates across all chapter members in various squads</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <h5>Key Takeaways</h5>
        <ul>
          <li><strong>Tech Lead</strong> is about <em>execution and architecture</em>.</li>
          <li><strong>Chapter Lead</strong> is about <em>people, craft, and consistency</em>.</li>
        </ul>
      </div>
    </div>
  );
};

export default RoleComparison;
