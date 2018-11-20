webpackJsonp([5374902657704],{665:function(e,t){e.exports={data:{markdownRemark:{html:"<p>The environmental score customizes the <a href=\"severity.html\">severity</a> of a vulnerability to an asset specific to the program’s organization. Setting this score enables you to see how severe the vulnerability to an asset is to your organization. It’s determined by setting impact levels to these 3 metrics:</p>\n<ul>\n<li>Confidentiality</li>\n<li>Integrity</li>\n<li>Availability</li>\n</ul>\n<p><i>You can read more on these metrics in the section below on <b>Environmental Score Components</b>.</i></p>\n<p>To set the environmental score for an asset:</p>\n<ol>\n<li>Go to <b>Settings > Program > Scope</b>.</li>\n<li>Edit an existing asset to change the environmental score by selecting the degree of importance (None, Low, Medium, High) to each component.</li>\n</ol>\n<h3>Effects to the CVSS v.3 Calculator on HackerOne</h3>\n<p>There are cases where the CVSS rating on HackerOne is vastly different from the CVSS calculator on <a href=\"https://www.first.org/cvss/calculator/3.0\">first.org</a>. The discrepancy in severity ratings isn’t a bug!</p>\n<p>The CVSS calculator on first.org gives 3 different scores. The different scores are the:</p>\n<ul>\n<li>Base score</li>\n<li>Temporal score</li>\n<li>Environmental score</li>\n</ul>\n<p>The CVSS score on HackerOne will be different from the CVSS scores on first.org because the score on HackerOne factors in <b>BOTH the environmental score and the base score</b> of the asset, whereas the scores on first.org are all separate.</p>\n<p><i>For example, you may find that the severity score for an asset on HackerOne is 4.3, whereas the base score on first.org is 5.4 and the environmental score is 5.4. The score on HackerOne is different because the environmental score is calculated into the base score, whereas on first.org, the environmental score is listed separately from the base score.</i></p>\n<h4>How the Calculation Works</h4>\n<p>HackerOne doesn’t randomly put the environmental score and the base score together to get a total CVSS rating. Whatever value is selected for each metric of the environmental score (confidentiality, integrity, availability), a numeric modifier is applied to that metric in the CVSS calculator. (<i>Note: The CVSS calculator also contains metrics from the environmental score.</i>)</p>\n<blockquote>\n<p><i>For example, when calculating your environmental score for the asset <code>test.com</code>, you set the confidentiality to be High. When either you or a hacker calculate the severity using the CVSS calculator on HackerOne, the 1.5 modifier for the Confidentiality metric is applied to the Confidentiality component in the CVSS calculator, which will give you a different score from the base score on first.org.</i></p>\n</blockquote>\n<p>The following table shows what modifier is applied. The same table is used for all 3 metrics. Note that choosing a metric value of Medium or not choosing any value at all will have no effect on the base score.</p>\n<table>\n<thead>\n<tr>\n<th>Metric Value</th>\n<th>Modifier Value</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>High</td>\n<td>1.5</td>\n<td>Loss of Confidentiality/Integrity/Availability is likely to have a catastrophic, adverse effect on the organization or individuals associated with the organization.</td>\n</tr>\n<tr>\n<td>Medium</td>\n<td>1</td>\n<td>Loss of Confidentiality/Integrity/Availability is likely to have a serious adverse effect on the organization or individuals associated with the organization.</td>\n</tr>\n<tr>\n<td>Low</td>\n<td>0.5</td>\n<td>Loss of Confidentiality/Integrity/Availability is likely to have only a limited adverse effect on the organization or individuals associated with the organization.</td>\n</tr>\n<tr>\n<td>None</td>\n<td>0</td>\n<td>Loss of Confidentiality/Integrity/Availability is likely to have no adverse effect on the organization or individuals associated with organization.</td>\n</tr>\n</tbody>\n</table>\n<h3>Effects to Severity</h3>\n<p>Setting an environmental score for an asset also caps the CVSS severity rating when a hacker calculates the severity for the asset in the submission report. The maximum severity a hacker can set for the asset is shown in the <b>Maximum severity</b> field.</p>\n<p>For example: A program sets all 3 environmental score requirements to be None/Low for the asset <code>test.com</code> so that the maximum severity is set to None.</p>\n<p>The hacker now can’t set the CVSS score for <code>test.com</code> to be Critical or High when submitting a report, even though the hacker selected all of the highest ratings on the CVSS calculator.</p>\n<h3>Environmental Score Components</h3>\n<p>As mentioned above, the 3 components that make up the environmental score are:</p>\n<ul>\n<li>Confidentiality</li>\n<li>Integrity</li>\n<li>Availability</li>\n</ul>\n<h4>Confidentiality</h4>\n<p>Confidentiality refers to whether the data being obtained is actually confidential to the business. If a vulnerability were successfully exploited, this metric measures the impact of the confidentiality of the information that is at risk. To set the confidentiality level of the asset, you can choose from these 4 options:</p>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>None</td>\n<td>There's no loss of confidentiality within the impacted component.</td>\n</tr>\n<tr>\n<td>Low</td>\n<td>There's some loss of confidentiality. Access to some restricted information is obtained, but the attacker doesn't have control over what information is obtained or the amount or kind of loss that's constrained. The information disclosed doesn't cause a direct, serious loss to the impacted component.</td>\n</tr>\n<tr>\n<td>Medium</td>\n<td>In between Low and High</td>\n</tr>\n<tr>\n<td>High</td>\n<td>There's a total loss of confidentiality, resulting in all resources within the impacted component being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact.</td>\n</tr>\n</tbody>\n</table>\n<h4>Integrity</h4>\n<p>Integrity refers to the trustworthiness of information. This metric measures the impact to the integrity of a successfully exploited vulnerability. To set the integrity level of the asset, you can choose from these 4 options:</p>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>None</td>\n<td>There's no loss of integrity within the impacted component.</td>\n</tr>\n<tr>\n<td>Low</td>\n<td>Modification of data is possible, but the attacker doesn't have control over the consequence of a modification. The amount of modification may be constrained, and there isn't a direct, serious impact on the affected component.</td>\n</tr>\n<tr>\n<td>Medium</td>\n<td>In between Low and High</td>\n</tr>\n<tr>\n<td>High</td>\n<td>There's a total loss of integrity or a complete loss of protection due to the vulnerability. For example, the attacker is able to modify any or all files protected by the impacted component. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the impacted component.</td>\n</tr>\n</tbody>\n</table>\n<h4>Availability</h4>\n<p>Availability refers to the loss of availability of the impacted component itself, such as a networked service (e.g., web, database, email). Attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of an impacted component.  To set the availability level of the asset, you can choose from these 4 options:</p>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>None</td>\n<td>There's no impact to the availability within the impacted component.</td>\n</tr>\n<tr>\n<td>Low</td>\n<td>There's reduced performance or interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker doesn't have the ability to completely deny service to legitimate users. The resources in the impacted component are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the impacted component.</td>\n</tr>\n<tr>\n<td>Medium</td>\n<td>In between Low and High</td>\n</tr>\n<tr>\n<td>High</td>\n<td>There's a total loss of availability resulting in the attacker being able to fully deny access to resources in the impacted component. This loss is either sustained (the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has finished). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the impacted component. For example, the attacker can't disrupt existing connections, but can prevent new connections, the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks only a small amount of memory, but after repeated exploitation causes a service to become completely unavailable.</td>\n</tr>\n</tbody>\n</table>",frontmatter:{path:"/programs/environmental-score.html",id:"programs/environmental-score",title:"Environmental Score",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-environmental-score-html-64a2e47d429ee7f39e41.js.map