"""
Bob's API Module
================
A simple Python module providing utility functions for the REST API project.
"""


class APIHelper:
    """Helper class for common API operations."""
    
    def __init__(self, base_url: str = "http://localhost:5000"):
        self.base_url = base_url
    
    def build_endpoint(self, path: str) -> str:
        """Build a full endpoint URL from a path."""
        return f"{self.base_url}/{path.lstrip('/')}"
    
    def validate_response(self, response_data: dict, required_fields: list) -> bool:
        """Validate that response contains all required fields."""
        return all(field in response_data for field in required_fields)


def health_check() -> dict:
    """Return a health check response."""
    return {
        "status": "healthy",
        "service": "bob-api",
        "version": "1.0.0"
    }


def format_response(data: any, success: bool = True, message: str = None) -> dict:
    """Format a standard API response."""
    response = {
        "success": success,
        "data": data
    }
    if message:
        response["message"] = message
    return response


if __name__ == "__main__":
    # Demo usage
    helper = APIHelper()
    print(f"Endpoint: {helper.build_endpoint('/api/users')}")
    print(f"Health: {health_check()}")
    print(f"Response: {format_response({'id': 1, 'name': 'test'})}")
