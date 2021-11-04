package group4_project.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UIController {
    
    @RequestMapping(value = "/")
	public String index() {
		return "index";
	}
}

/*

@Controller marks this class as a Spring MVC controller.
@RequestMapping flags the index() method to support the / route.
It returns index as the name of the template, which
Spring Boot’sautoconfigured view resolver will map to
src/main/resources/templates/index.html.

*/